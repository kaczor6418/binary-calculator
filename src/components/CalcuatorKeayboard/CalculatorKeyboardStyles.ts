//language=CSS
export const calculatorKeyboardStyles: string = `
div {
    background-color: var(--color-primary-dark);
    display: flex;
    justify-content: stretch;
    padding: var(--spacing-l);
    height: calc(60% - var(--font-size-l) - 2 * var(--spacing-m) - 2px);
}

kk-list {
    flex: 1;
}

.horizontal #values {
    padding-right: var(--spacing-s);
}

.horizontal #operators {
    padding-left: var(--spacing-s);
}

.horizontal-reversed #values {
    padding-left: var(--spacing-s);
}

.horizontal-reversed #operators {
    padding-right: var(--spacing-s);
}

.vertical #values {
    padding-bottom: var(--spacing-s);
}

.vertical #operators {
    padding-top: var(--spacing-s);
}

.vertical-reversed #values {
    padding-top: var(--spacing-s);
}

.vertical-reversed #operators {
    padding-bottom: var(--spacing-s);
}
    
.vertical {
    flex-direction: column;
}
    
.horizontal-reversed {
    flex-direction: row-reverse;
}
    
.vertical-reversed {
    flex-direction: column-reverse;
}
`;