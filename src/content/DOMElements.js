export const chatsColumn = () => document.querySelector('div:has(> header[data-testid="chatlist-header"] [data-testid="drawer-title-body"])');
export const messagesColumn = () => document.querySelector('div:has(> [data-testid="conversation-panel-wrapper"])')
  || document.querySelector('div:has(> * > [data-testid="intro-panel"])');
export const buttonChats = () => document.querySelectorAll('header[data-testid="chatlist-header"] div:has(>span>div>button[aria-label])')[0].querySelector('button[aria-label]');
export const chatsList = () => document.querySelector('#pane-side > div > div > [aria-label]');
