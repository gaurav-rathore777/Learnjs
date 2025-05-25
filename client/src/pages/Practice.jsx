import React, { useState, useEffect, useCallback } from "react";

// Debounce function
function useDebounce(callback, delay) {
  const debounceRef = React.useRef();

  const debouncedFunction = useCallback((...args) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);

  return debouncedFunction;
}

export function Practice() {
  const [query, setQuery] = useState("");

  // Function to be called after debounce
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    // Yahan API call ya filtering logic aa sakta hai
  };

  // Custom debounce hook usage
  const debouncedSearch = useDebounce(handleSearch, 500);

  // Call debounced function when query changes
  useEffect(() => {
    if (query) {
      debouncedSearch(query);
    }
  }, [query, debouncedSearch]);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>🔍 Debounced Search in React</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          color: "red",
          width: "300px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
      <p style={{ marginTop: "20px", color: "green" }}>
        Search term: <strong>{query}</strong>
      </p>
    </div>
  );
}
