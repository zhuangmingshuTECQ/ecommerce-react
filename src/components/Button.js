import React from 'react';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import OfflineIcon from '../../assets/images/OfflineIcon.svg';
import StockTakeIcon from '../../assets/images/StockTakeIcon.svg';
import UpdateThresholdIcon from '../../assets/images/UpdateThresholdIcon.svg';
import TransferIcon from '../../assets/images/Transfer_btn.svg';
import CCTVIcon from '../../assets/images/CCTVIcon.svg';
import MaintenanceIcon from '../../assets/images/MaintenanceIcon.svg';
import CallRoboIcon from '../../assets/images/CallRoboIcon.svg';
import EditIcon from '../../assets/images/EditIcon.svg';
import DeleteIcon from '../../assets/images/DeleteIcon.svg';
import AddIcon from '../../assets/images/AddIcon.png';
import RemoveIcon from '../../assets/images/RemoveIcon.png';
import CheckoutIcon from '../../assets/images/CheckoutIcon.svg';
import DownloadIcon from '@mui/icons-material/Download';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import NextPlanIcon from '@mui/icons-material/NextPlan';
// import SearchIcon from '@mui/icons-material/Search';

import refreshPic from '../../assets/images/Refresh.png';

const StyledButton = styled(MuiButton)({
  textTransform: 'none',
  whiteSpace: 'nowrap',
  height: 30,
});

const Button = (props) => {
  const action = props.action;

  if (action === 'ascplan') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#00388C' }}
        onClick={props.onClick}
      >
        Re-Plan
      </StyledButton>
    );
  }

  if (action === 'Exit') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#FF0000' }}
        onClick={props.onClick}
      >
        Exit
      </StyledButton>
    );
  }

  if (action === 'checkout') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#676767' }}
        onClick={props.onClick}
      >
        <Tooltip title='Checkout'>
          <img src={CheckoutIcon} alt='Checkout Button' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'changeStatus') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#00388C' }}
        onClick={props.onClick}
      >
        <Tooltip title='Change Status'>
          <ChangeCircleIcon />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'search') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#676767', ml: 2, width: '70px', my: 'auto' }}
        onClick={props.onClick}
      >
        Search
      </StyledButton>
    );
  }

  if (action === 'bulkCheckout') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#676767' }}
        onClick={props.onClick}
      >
        <Tooltip title='Checkout'>
          <img src={CheckoutIcon} alt='Checkout Button' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'offline') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#C23F38' }}
        onClick={props.handleClick}
      >
        <Tooltip title='Offline'>
          <img src={OfflineIcon} alt='Offline Button' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'online') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#457B3B' }}
        onClick={props.handleClick}
      >
        <Tooltip title='Online'>
          <img src={OfflineIcon} alt='Offline Button' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'stockTake') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#0063BE' }}
        onClick={props.handleClick}
      >
        <Tooltip title='Stock Take'>
          <img src={StockTakeIcon} alt='Stock Take Button' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'updateThreshold') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#00388C' }}
        onClick={props.handleClick}
      >
        <Tooltip title='Update Threshold'>
          <img src={UpdateThresholdIcon} alt='Update Threshold Button' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'transfer') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#006ED4' }}
        onClick={props.onClick}
      >
        <Tooltip title='Transfer'>
          <img src={TransferIcon} alt='Transfer Button' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'update') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#00B2E2' }}
        onClick={props.handleClick}
      >
        <Tooltip title='Update'>
          <img src={refreshPic} alt='Update' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'bulkTransfer') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#006ED4' }}
        onClick={props.onClick}
      >
        <Tooltip title='Transfer'>
          <img src={TransferIcon} alt='Transfer Button' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'cctv') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#7E7E7E' }}
        onClick={props.handleClick}
      >
        <Tooltip title='CCTV'>
          <img src={CCTVIcon} alt='CCTV Button' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'maintenance') {
    return (
      <StyledButton variant='contained' sx={{ backgroundColor: '#2F8092' }}>
        <Tooltip title='Maintenance' onClick={props.handleClick}>
          <img src={MaintenanceIcon} alt='Maintenance' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'callrobo') {
    return (
      <StyledButton variant='contained' sx={{ backgroundColor: '#2F924B' }}>
        <Tooltip title='Call Robo' onClick={props.handleClick}>
          <img src={CallRoboIcon} alt='Call Robo' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'edit') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#595959' }}
        onClick={props.handleClick}
      >
        <Tooltip title='Edit'>
          <img src={EditIcon} alt='Edit' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'reset') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#595959' }}
        onClick={props.handleClick}
      >
        <Tooltip title='Reset'>
          <>Reset</>
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'delete') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#B60000' }}
        onClick={props.handleClick}
      >
        <Tooltip title='Delete'>
          <img src={DeleteIcon} alt='Delete' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'add') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#457B3B', borderRadius: 50 }}
        onClick={props.handleClick}
      >
        <Tooltip title='Add'>
          <img src={AddIcon} alt='AddIcon' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'remove') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#C23F38', py: 1.6, borderRadius: 10 }}
        onClick={props.handleClick}
      >
        <Tooltip title='Remove'>
          <img src={RemoveIcon} alt='RemoveIcon' />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'back') {
    return (
      <StyledButton
        sx={{ backgroundColor: 'none', py: 1.6 }}
        color='primary'
        onClick={props.handleClick}
        disableRipple={true}
      >
        {props.children}
      </StyledButton>
    );
  }

  if (action === 'viewAllAlert') {
    return (
      <StyledButton
        variant='text'
        sx={{
          backgroundColor: '#F3F3F3',
          '&.MuiButton-text': {
            color: '#000000',
          },
          '&.MuiButtonBase-root:hover': {
            bgcolor: '#F3F3F3',
          },
        }}
        onClick={props.handleClick}
        disableRipple={true}
      >
        {props.children}
      </StyledButton>
    );
  }

  if (action === 'download') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#676767', ml: 2, width: '70px', my: 'auto' }}
        onClick={props.onClick}
      >
        <Tooltip title='download'>
          <DownloadIcon />
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'request') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#006ED4' }}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        <Tooltip title='Request'>
          <>Request</>
        </Tooltip>
      </StyledButton>
    );
  }

  if (action === 'requested') {
    return (
      <StyledButton
        variant='contained'
        sx={{ backgroundColor: '#676767' }}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        <Tooltip title='Requested'>
          <>Requested</>
        </Tooltip>
      </StyledButton>
    );
  }

  return (
    <StyledButton
      variant={props.variant ? props.variant : 'contained'}
      disabled={props.disabled}
      onClick={props.onClick}
      sx={{ width: props.confirmfullWidth ? '100%' : 'default' }}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
