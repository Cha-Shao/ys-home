import { ref } from 'vue'
import type { Ref } from 'vue'

export const menuStatus: Ref<boolean> = ref(false)

class MenuStatus {
  public show() {
    menuStatus.value = true
  }

  public hide() {
    menuStatus.value = false
  }
}

export const useMenuStatus = new MenuStatus()
