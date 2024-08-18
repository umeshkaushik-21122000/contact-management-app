import { FormContainerProps } from "./types";

const FormContainer: React.FC<FormContainerProps> = ({ children }) => (
    <div className="rounded rounded-4 text-black text-start p-6 shadow-2xl max-w-screen-sm max-h-80">
      <form
        action="/contacts"
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col space-y-4"
      >
        {children}
      </form>
    </div>
  );

  export default FormContainer;