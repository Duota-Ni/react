import Vue from 'vue'
import Clipboard from 'clipboard'

function clipboardSuccess(msg) {
  //$alertMsg封装消息提示ss
  Vue.prototype.$alertMsg(msg, 'success')
}

function clipboardError(msg) {
  Vue.prototype.$alertMsg(msg, 'success')
}

export default function handleClipboard(text, event, { successMsg, errorMsg }) {
  console.log(event)
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  console.log(clipboard)
  clipboard.on('success', () => {
    clipboardSuccess(successMsg)
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError(errorMsg)
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
