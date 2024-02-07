import Toast from '../Toast.svelte';

interface ToastOptions {
  icon?: string;
  dismissable?: boolean;
}

let toastContainer: HTMLDivElement | null = null;

const createToastContainer = () => {
  const toastContainer = document.createElement('div');
  toastContainer.id = 'toast-container';
  document.body.appendChild(toastContainer);
  return toastContainer;
}

export const toastHandler = () => {
  if (!toastContainer) {
    toastContainer = createToastContainer();
  }

  const toast = new Toast({
    target: toastContainer,
    props: {
      message: 'Hello Test',
      data: {
        dismissable: true
      }
    }
  });

  return toast;
}