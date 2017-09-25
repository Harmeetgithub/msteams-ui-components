import { Context } from '../context';
import { InputStyles } from './input-styles';

export function base(c: Context): InputStyles {
  const { rem } = c;
  return {
    label: {
      position: 'relative',
      padding: 0,
      margin: 0,
      display: 'inline-block',
      overflow: 'hidden',
    },
    normal: {
      height: rem(3.2),
      width: rem(20),
      borderRadius: rem(0.3),
      border: 0,
      backgroundColor: '#EEF1F5',
      padding: `${rem(0.8)} ${rem(1.2)}`,
      margin: 0,
      outline: 'none',
    },
    underline: {
      display: 'block',
      height: rem(0.1),
      position: 'absolute',
      backgroundColor: 'red',
      left: rem(-20),
      bottom: rem(0.1),
      width: rem(20),
      transition: 'all 0.3s ease-in-out',
    },
    focusUnderline: {
      left: 0,
    },
  };
}
