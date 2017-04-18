export class InputMapper {

    findInputs(document) {
        const slice = Array.prototype.slice;
        return [
            ...slice.call(document.getElementsByTagName('input'))
                    .filter(el => !['hidden', 'button', 'submit'].includes(el.type)),
            ...slice.call(document.getElementsByTagName('textarea')),
            ...slice.call(document.getElementsByTagName('select'))
        ];
    }
}