export interface AuthUserType {
	email?: string,
	token?: string
}

export interface AuthContextType extends AuthUserType {
	authenticate: (email: string, password: string) => Promise<void>,
	logout: () => void
}

export interface AuthProviderType {
	children: JSX.Element
}