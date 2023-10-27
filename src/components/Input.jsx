export default function Input({labelName, changeValueHandler}){

    return (
        <>
            <label>{labelName}</label>
            <input onChange={changeValueHandler}></input>
        </>
    )
}