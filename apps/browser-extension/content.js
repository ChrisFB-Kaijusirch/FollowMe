document.addEventListener('click', e => {
  const details = e.target?.outerHTML?.slice(0,80) || 'click'
  window.postMessage({ source:'scribe', action:'click', details, timestamp: Date.now() })
})
document.addEventListener('input', e => {
  window.postMessage({ source:'scribe', action:'input', details: e.target?.value || '', timestamp: Date.now() })
})
