import { useState, useEffect } from 'react'

export function useSearchQuery(initialQuery: string = '') {
  const [filterQuery, setFilterQuery] = useState(initialQuery)

  const updateQuery = (query: string) => {
    setFilterQuery(query)
  }

  return {
    filterQuery,
    updateQuery
  }
} 