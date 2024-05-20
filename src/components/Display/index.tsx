interface DisplayProps {
    leftContent : JSX.Element;
    rightContent : JSX.Element;
}

const Display : React.FC<DisplayProps> = ({ leftContent, rightContent }) => {
    return (
      <>
        <div className="flex flex-col z-10 md:flex-row">
            <div className="basis-1/2">
                {leftContent}
            </div>
            <div className="basis-1/2">
                {rightContent}
            </div>
        </div>
      </>  
    );
}

export default Display;