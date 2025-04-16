import { useState, useCallback, useRef } from 'react'
import axios from 'axios'

interface UseCrudOptions<T> {
  baseUrl: string
  onSuccess?: () => void
  onError?: (error: any) => void
}

export function useCrud<T>({ baseUrl, onSuccess, onError }: UseCrudOptions<T>) {
  const [items, setItems] = useState<T[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)
  
  // Use refs to store callbacks to prevent dependency changes
  const onSuccessRef = useRef(onSuccess)
  const onErrorRef = useRef(onError)
  
  // Update refs when callbacks change
  onSuccessRef.current = onSuccess
  onErrorRef.current = onError

  const fetchItems = useCallback(async () => {
    try {
      setLoading(true)
      const response = await axios.get(baseUrl)
      setItems(response.data.data || response.data)
      onSuccessRef.current?.()
    } catch (err) {
      setError(err)
      onErrorRef.current?.(err)
    } finally {
      setLoading(false)
    }
  }, [baseUrl])

  const createItem = useCallback(async (data: Partial<T>) => {
    try {
      setLoading(true)
      const response = await axios.post(baseUrl, data)
      setItems(prev => [...prev, response.data.data || response.data])
      onSuccessRef.current?.()
      return response.data.data || response.data
    } catch (err) {
      setError(err)
      onErrorRef.current?.(err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [baseUrl])

  const updateItem = useCallback(async (id: string, data: Partial<T>) => {
    try {
      setLoading(true)
      const response = await axios.put(`${baseUrl}/${id}`, data)
      setItems(prev => prev.map(item => 
        (item as any).id === id ? (response.data.data || response.data) : item
      ))
      onSuccessRef.current?.()
      return response.data.data || response.data
    } catch (err) {
      setError(err)
      onErrorRef.current?.(err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [baseUrl])

  const deleteItem = useCallback(async (id: string) => {
    try {
      setLoading(true)
      await axios.delete(`${baseUrl}/${id}`)
      setItems(prev => prev.filter(item => (item as any).id !== id))
      onSuccessRef.current?.()
    } catch (err) {
      setError(err)
      onErrorRef.current?.(err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [baseUrl])

  return {
    items,
    loading,
    error,
    fetchItems,
    createItem,
    updateItem,
    deleteItem
  }
} 