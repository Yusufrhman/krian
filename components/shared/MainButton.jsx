export default function MainButton({ children }) {
    return <div className="bg-main-green rounded-lg w-fit h-fit px-2 py-1 flex items-center justify-center">
       <p className="text-white">{children}</p>
     </div>;
}