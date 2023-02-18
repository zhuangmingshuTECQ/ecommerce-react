import React, { ChangeEvent } from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios, { AxiosProgressEvent } from 'axios';

export default function UploadCsv() {
	const [percentCompleted, setPercentCompleted] = React.useState(0)
	const [selectedFile, setSelectedFile] = React.useState(false);
	const handleUpload = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) {
			return;
		}

		setSelectedFile(true)
		
		const formData = new FormData();
		formData.append('file', e.target.files[0]);
		
		const { data } = await axios.post('http://localhost:8080/upload', formData, {
			headers: {
			  'Content-Type': 'multipart/form-data'
			},
			onUploadProgress: function(progressEvent: AxiosProgressEvent) {
				if (progressEvent.total) {

					setPercentCompleted(Math.round((progressEvent.loaded) / progressEvent.total * 100));
				} else {
					console.error('Upload progress not available');
				}
				
			}
		  });

		window.location.reload() // TODO add success notification
		
		return data;
	}
  
	return (
		<Box sx={{ width: '80%' }}>
			{selectedFile && <div className="mg20">
					<Box className="mb25" display="flex" alignItems="center">
					<Box width="100%" mr={1}>
						<LinearProgress variant="determinate" value={percentCompleted} />
					</Box>
					<Box minWidth={35}>
						<Typography variant="body2" color="textSecondary">{`${Math.round(percentCompleted)}%`}</Typography>
					</Box>
				</Box>
			</div >}
			<Button variant='contained' component='label' disabled={selectedFile} >
				<input 
					hidden 
					type='file' 
					accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
					onChange={handleUpload}
					multiple 
				/>
				Upload
			</Button>
		</Box>
	);
}