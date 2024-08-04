'use client';

export default function Page() {
    const showDialog: any = () => {
        alert("alert");
    };

    return (
    <div><button onClick={showDialog()}>Click</button></div>
    );
}
