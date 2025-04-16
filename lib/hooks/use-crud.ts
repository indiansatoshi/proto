import { useState, useCallback, useRef } from 'react'

interface UseCrudOptions<T> {
  baseUrl: string
  onSuccess?: () => void
  onError?: (error: any) => void
}

export function useCrud<T>({ baseUrl, onSuccess, onError }: UseCrudOptions<T>) {
  const [items, setItems] = useState<T[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>(null)

  const onSuccessRef = useRef(onSuccess)
  const onErrorRef = useRef(onError)

  onSuccessRef.current = onSuccess
  onErrorRef.current = onError

  const fetchJson = async (url: string, options?: RequestInit) => {
    const res = await fetch(url, options)
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      throw err.error || err || res.statusText
    }
    return res.json()
  }

  const fetchItems = useCallback(async () => {
    try {
      setLoading(true)
      const data = await fetchJson(baseUrl)
      setItems(data.data || data)
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
      const res = await fetchJson(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      setItems(prev => [...prev, res.data || res])
      onSuccessRef.current?.()
      return res.data || res
    } catch (err) {
      setError(err)
      onErrorRef.current?.(err)
    } finally {
      setLoading(false)
    }
  }, [baseUrl])

  const updateItem = useCallback(async (id: string, data: Partial<T>) => {
    try {
      setLoading(true)
      const res = await fetchJson(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      setItems(prev => prev.map(item => (item as any).id === id ? (res.data || res) : item))
      onSuccessRef.current?.()
      return res.data || res
    } catch (err) {
      setError(err)
      onErrorRef.current?.(err)
    } finally {
      setLoading(false)
    }
  }, [baseUrl])

  const deleteItem = useCallback(async (id: string) => {
    try {
      setLoading(true)
      await fetchJson(`${baseUrl}/${id}`, { method: 'DELETE' })
      setItems(prev => prev.filter(item => (item as any).id !== id))
      onSuccessRef.current?.()
    } catch (err) {
      setError(err)
      onErrorRef.current?.(err)
    } finally {
      setLoading(false)
    }
  }, [baseUrl])

  return {
    items, loading, error, fetchItems, createItem, updateItem, deleteItem
  }
}