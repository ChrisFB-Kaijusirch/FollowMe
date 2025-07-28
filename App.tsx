import React, { useState, useEffect } from 'react'
import { useStore, Step } from './store'
import { exportPDF } from './export'

export const App = () => {
  const { steps, addStep, clearSteps } = useStore()
  const [recording, setRecording] = useState(false)

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data?.source === 'scribe') {
        addStep({
          id: steps.length + 1,
          action: e.data.action,
          details: e.data.details,
          timestamp: e.data.timestamp ?? Date.now(),
        })
      }
    }
    window.addEventListener('message', onMessage as any)
    return () => window.removeEventListener('message', onMessage as any)
  }, [addStep, steps.length])

  return (
    <div className="p-4">
      <h1>Local Scribe</h1>
      <button onClick={() => setRecording(!recording)}>
        {recording ? 'Stop' : 'Start'} Recording
      </button>
      <button onClick={() => exportPDF(steps)}>Export PDF</button>
      <button onClick={clearSteps}>Clear</button>
      <ul>
        {steps.map((s) => (
          <li key={s.id}>
            [{new Date(s.timestamp).toLocaleTimeString()}] {s.action}: {s.details}
          </li>
        ))}
      </ul>
    </div>
  )
}
