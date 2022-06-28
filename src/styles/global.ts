import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	*{
		margin:0;
		padding:0;
		box-sizing: border-box;
	}
	html{
		font-size:62.5%;
	}
	body{
		background:hsl(218, 23%, 16%);
		color:hsl(193, 38%, 86%);
		font-family:'Manrope', sans-serif;

		display: flex;
		justify-content: center;
		align-items: center;

		min-height: 600px;
	}
	img{
		width: 100%;
	}

	@media(max-width:400px)
	{
		html{
			font-size:50%;
		}
	}
	@media(max-width:300px)
	{
		html{
			font-size:40%;
		}
	}
`;
