import { Dialog } from "@headlessui/react";

interface ModalPromptProps {
  open: boolean;
  onClose: () => void;
}

export function ModalPrompt({
  open = false,
  onClose = () => void 0,
}: ModalPromptProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="fixed inset-0 flex justify-center my-4"
    >
      <Dialog.Overlay className="fixed top-0 left-0 z-40 w-screen h-screen bg-black bg-opacity-25" />

      <div className="relative z-50 w-11/12 h-full p-4 overflow-y-auto bg-white rounded-lg sm:w-3/4 md:w-2/3 lg:w-1/2">
        <CloseButton onClick={onClose} />

        <div>
          <h3 className="mb-4 text-lg font-bold">Modal Heading</h3>

          <form className="space-y-4">
            <div>Modal Content</div>
          </form>
        </div>
      </div>
    </Dialog>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="absolute top-2 right-2">
      <button
        type="button"
        className="inline-flex justify-center px-2 py-1 text-sm font-medium text-gray-200 bg-gray-900 border border-transparent rounded hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        onClick={onClick}
      >
        X
      </button>
    </div>
  );
}
