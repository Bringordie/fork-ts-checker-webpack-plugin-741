import MuiButton from '@mui/material/Button';
import styled from 'styled-components';

export type ButtonType = {
    children: any;
    level?: number;
    disabled?: boolean;
    fullscreen?: boolean;
    click?: any;
    size?: string;
};

const StyledButton = styled(MuiButton)<{ level: number; width: string; buttonsize: string }>`
    ${(props) =>
        (props.level, props.width, props.buttonsize) &&
        `
    background: ${props.level === 1 ? 'var(--color-primary1-100)' : ''};
    border: ${'1px solid ' + (props.level === 1 ? 'var(--color-primary1-100)' : '')};
    color: ${props.level === 1 ? 'var(--color-primary3-100)' : ''};
      
      box-shadow: 0px 0px transparent;
      border-radius: 4px;
      padding: ${props.buttonsize === 'small' ? '12px' : '12px 32px'};
      height: ${props.buttonsize === 'small' ? '20px' : '40px'};
      min-width:  ${props.buttonsize === 'small' ? '60px' : '159px'};
      width: ${props.width};
      font-weight: 400;
      line-height: 24px;
      font-size: ${props.buttonsize === 'small' ? '12px' : '15px'};
      font-family: Festina;
      font-weight: 200;
      text-transform: none;

    :disabled{
      background: ${props.level === 1 ? 'var(--color-primary1-100)' : ''};
      border: ${'1px solid ' + (props.level === 1 ? 'var(--color-primary1-100)' : '')};
      color: ${props.level === 1 ? 'var(--color-primary3-100)' : ''};
    }

    :hover {
      background: ${props.level === 1 ? 'var(--color-primary1-100)' : ''};
      border: ${'1px solid ' + (props.level === 1 ? 'var(--color-primary1-100)' : '')};
      color: ${props.level === 1 ? 'var(--color-primary3-100)' : ''};
      box-shadow: 0px 0px transparent;
    }

    :active {
      background: ${props.level === 1 ? 'var(--color-primary1-100)' : ''};
      border: ${'1px solid ' + (props.level === 1 ? 'var(--color-primary1-100)' : '')};
      color: ${props.level === 1 ? 'var(--color-primary3-100)' : ''};
      box-shadow: 0px 0px transparent;
    }
  `}
`;

function Button({ children, level, disabled, fullscreen, click, size }: ButtonType) {
    return (
        <StyledButton disabled={disabled} width={fullscreen ? '100%' : 'auto'} level={disabled ? 5 : level || 1} onClick={() => click()} buttonsize={size || 'normal'}>
            {children}
        </StyledButton>
    );
}

export default Button;
