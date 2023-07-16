import React from 'react';
import { ISvg } from './MainPageSvg';

const ErrorPageSvg = ({ id, addClass }: ISvg) => {
    switch (id) {
        case 'soul-logo': {
            return (
                <svg className={addClass} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 194 377">
                    <path stroke="#fff" strokeWidth="13" d="M7 0v280c0 49.706 40.294 90 90 90s90-40.294 90-90V0"/>
                </svg>
            );
        }
        case 'cursor-orange': {
          return (
            <svg className={addClass} width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect x="61" y="85" width="18" height="23" fill="url(#pattern0)"/>
              <circle cx="62" cy="62" r="61.5" stroke="#A36947"/>
              <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_923_3815" transform="scale(0.0555556 0.0434783)"/>
              </pattern>
              <image id="image0_923_3815" width="25" height="30" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAeCAYAAADZ7LXbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgB7VY9SwNBEJ2NivEDRUUx+FFoYcDCMhfID7BXG/1J9kIw5g+IXXohKVIEUnlwNuphJ9cIIijm1jfcLi6a01vdFEIGHjtzt5mX92537wR9hDBySQ5jxCDIqVqQ48gZBHkp5WsYhkfIx417TkKopgWpotPp7KOeJIfKuMkEsMkEnufxELsmEqrZFnfHOBAiTVLUJIMg6kvCKJVKzohSSVwq+pbElaIfSVwQZSIhw7put7uHOk/JhrUmic2GpoJP6OHeHDBKGdV8IeHGQRBc8ch1rVa7azQa58j5yNkFdoAFYOxXJPqfo+lFtVq9JcMm5BWeBxSAKbJ4LuaO11YcAgdca9vq9fq17/vHyBcpOYasHzz/aEMRsB0eo9lsniFuSFkYRdEl8iWysMkk4VN4GdhmRZTYsQ5UWE25XJZCCG3ZqppvTcLS2bJ5YIaS5TkLFFut1ikrZLTb7RNcW7MlEcaoX1J6X/Dy5GW6QolFfO0BuAcegTfK+JoWfWqpRm3jtFLJ8Qw8AS9ATJZK0u5pK/W3QE9Bq/0zSdocp18ywxjGP4h32nctovRegbwAAAAASUVORK5CYII="/>
              </defs>
            </svg>            
          );
      }
      case 'cursor-green': {
        return (
          <svg className={addClass} width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect x="61" y="85" width="18" height="23" fill="url(#pattern0)"/>
            <circle cx="62" cy="62" r="61.5" stroke="#AFD7E6"/>
            <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_923_3804" transform="scale(0.0555556 0.0434783)"/>
            </pattern>
            <image id="image0_923_3804" width="25" height="30" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAeCAYAAADZ7LXbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgB7VY9SwNBEJ2NivEDRUUx+FFoYcDCMhfID7BXG/1J9kIw5g+IXXohKVIEUnlwNuphJ9cIIijm1jfcLi6a01vdFEIGHjtzt5mX92537wR9hDBySQ5jxCDIqVqQ48gZBHkp5WsYhkfIx417TkKopgWpotPp7KOeJIfKuMkEsMkEnufxELsmEqrZFnfHOBAiTVLUJIMg6kvCKJVKzohSSVwq+pbElaIfSVwQZSIhw7put7uHOk/JhrUmic2GpoJP6OHeHDBKGdV8IeHGQRBc8ch1rVa7azQa58j5yNkFdoAFYOxXJPqfo+lFtVq9JcMm5BWeBxSAKbJ4LuaO11YcAgdca9vq9fq17/vHyBcpOYasHzz/aEMRsB0eo9lsniFuSFkYRdEl8iWysMkk4VN4GdhmRZTYsQ5UWE25XJZCCG3ZqppvTcLS2bJ5YIaS5TkLFFut1ikrZLTb7RNcW7MlEcaoX1J6X/Dy5GW6QolFfO0BuAcegTfK+JoWfWqpRm3jtFLJ8Qw8AS9ATJZK0u5pK/W3QE9Bq/0zSdocp18ywxjGP4h32nctovRegbwAAAAASUVORK5CYII="/>
            </defs>
          </svg>          
        );
    }
    }
};

export default ErrorPageSvg;
