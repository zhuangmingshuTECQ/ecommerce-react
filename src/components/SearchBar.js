import React, { useEffect } from 'react';
import { Box, Paper, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

const SearchBar = (props) => {
	// State to hold the Search Value
	const [searchTerm, setSearchTerm] = React.useState('');

	// To Clear SearchBar Input
	const clearSearch = () => {
		setSearchTerm('');
	};

	// To handle keying search value
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	// To handle search button pressed
	const handleSearchClick = () => {
		if (props.handleSearch) {
			props.handleSearch(searchTerm);
		}
	};

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			console.log(searchTerm);

			if (searchTerm !== '' && props.handleSearch) {
				props.handleSearch(searchTerm);
			}
		}, 1000);

		return () => clearTimeout(delayDebounceFn);
	}, [searchTerm]);

	const StyledButton = styled(MuiButton)({
		textTransform: 'none',
		whiteSpace: 'nowrap',
		height: 30,
	  });

	return (
		// <Box sx={{ mt: 3, ml: 3 }}>
		<Box display='flex'>
			{/* Search bar input */}
			<Paper
				component='form'
				elevation={3}
				sx={{
					p: '2px 4px',
					display: 'flex',
					alignItems: 'center',
					width: 400,
				}}
			>
				<SearchIcon />
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder={props.placeholder ? props.placeholder : ''}
					value={searchTerm}
					onChange={handleSearch}
					endAdornment={
						<IconButton variant='contained' onClick={clearSearch} sx={{ opacity: 0.7 }}>
							<CancelIcon />
						</IconButton>
					}
				/>
			</Paper>
			<StyledButton
				variant='contained'
				sx={{ backgroundColor: '#676767', ml: 2, width: '70px', my: 'auto' }}
				onClick={handleSearchClick}
			>
				Search
      		</StyledButton>
		</Box>
		// </Box>
	);
};

export default SearchBar;
