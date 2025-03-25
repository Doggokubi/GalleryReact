import placeholder from './images/placeholder1.png'
import placeholder2 from './images/placeholder3.png'
function Iamgeloader(props)
{
    var category = props.category;
    if (category == 1)
    {
    return(
        <>
            <img src={placeholder2} alt='placeholdder2' height={100}/>
            <img src={placeholder2} alt='placeholdder2' height={100}/>
            <img src={placeholder2} alt='placeholdder2' height={100}/>
        
        </>)}
        else{
            return(
                <>
                <img src={placeholder} alt="Logo" height={100}/>
                <img src={placeholder} alt="Logo2" height={100}/>
                <img src={placeholder} alt="Logo3" height={100}/>
                </>
            )
        }


}
export default Iamgeloader