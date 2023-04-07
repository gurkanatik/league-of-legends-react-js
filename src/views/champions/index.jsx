import { useParams } from 'react-router-dom';
import championsJson from '../../champions.json'

export default function () {
    const {id} = useParams()
    return (
        <>
            {id}
        </>
    )
}