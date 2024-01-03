import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string'

// eslint-disable-next-line react/prop-types
const CategoriesBox = ({ label, icon: Icon, selected }) => {

    const [params, setParams] = useSearchParams()
    const navigate = useNavigate()
    const handelClick = () => {
        let currentQuery = {}
        if (params) {
            currentQuery = qs.parse(params.toString())
        }
        const updatedQuery = { ...currentQuery, category: label }
        const url = qs.stringifyUrl({
            url: '/',
            query: updatedQuery
        })

        navigate(url)

    }


    params.get('category')
    return (
        <div
            onClick={handelClick}
            className={`
            flex 
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            border-b-2
            hover:text-neutral-800
            translate
            cursor-pointer
            ${selected ?
                    'border-b-neutral-800 text-neutral-800'
                    : ' '}
            `}

        >
            <Icon size={26} />
            <div className="text-sm font-medium"> {label}</div>

        </div>
    );
};

export default CategoriesBox;