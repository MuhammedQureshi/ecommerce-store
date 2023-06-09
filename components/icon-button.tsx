interface IconButtonProps {
  onClick?: () => void;
  icon: React.ReactElement;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
}) => {
  return ( 
    <button onClick={onClick} className="rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition">
      {icon}
    </button>
   );
}

export default IconButton;
