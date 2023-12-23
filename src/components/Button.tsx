interface Options {
    content?: string,
    width?: "10px" | "20px" | "30px" | "40px" | "50px" | "60px" | "70px" | "80px" | "90px" | "100px" | string
}

export function Button({
    content = "No Name",
    width
}: Options) {

    const style = {
        width
    };

    return (
        <>
            <button style={style}>{content}</button>
        </>
    );
}