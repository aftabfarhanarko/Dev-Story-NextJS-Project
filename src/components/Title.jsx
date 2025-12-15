
const Title = ({children}) => {
    return (
        <div className=" py-7 bg-amber-100 text-red-300">
            <h1 className=" text-4xl font-bold py-5 px-5  ">
                {children}
            </h1>
        </div>
    );
};

export default Title;