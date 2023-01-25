import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom"

export const ProtectedLayout = ({children}:{children: JSX.Element}) => {
	const navigate = useNavigate()
	const auth = useAuth();

	if(!auth.token) {
		navigate('/')
	}

	return children
}