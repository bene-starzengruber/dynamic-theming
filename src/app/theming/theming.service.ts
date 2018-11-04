import { Injectable } from "@angular/core";
import cssVars from 'css-vars-ponyfill';

@Injectable()
export class ThemingService {

    initTheme(completeCallback?: (variables: {}) => void) {        
        this.getCssVariables(true, (variables => {
            completeCallback && completeCallback(variables);
        }));
    }

    updateTheme(changedTheme: { [themeOption: string]: any }, completeCallback?: (variables: {}) => void) {
        this.getCssVariables(false, (variables => {
            Object.keys(changedTheme).forEach(themeOption => variables[themeOption] = changedTheme[themeOption]);
            this.setCssVariables(variables, finalVariables => completeCallback && completeCallback(finalVariables));
        }));
    }

    public getCssVariables(updateDom?: boolean, completeCallback?: (variables: {}) => void) {
        cssVars({
            onlyLegacy: false,
            updateDOM: updateDom,
            onComplete: (a, b, variables) => completeCallback && completeCallback(variables)
        })
    }

    private setCssVariables(variables: {}, completeCallback?: (variables: {}) => void) {
        cssVars({
            onlyLegacy: false,
            variables: variables,
            onComplete: (a, b, variables) => completeCallback && completeCallback(variables)
          })
    }



}