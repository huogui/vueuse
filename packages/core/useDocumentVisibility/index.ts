import { ref } from 'vue-demi'
import { useEventListener } from '../useEventListener'

export function useDocumentVisibility() {
  const visibility = ref(document.visibilityState)

  useEventListener('visibilitychange', () => {
    visibility.value = document.visibilityState
  }, undefined, document)

  return visibility
}