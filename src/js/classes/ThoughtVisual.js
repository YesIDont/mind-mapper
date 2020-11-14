class ThoughtVisual {
    constructor(parent, defaultText, isRootThought = false) {
        this.element = this.createElement(parent, defaultText, isRootThought);
    }

    createElement(parent, defaultText, isRootThought) {
        const me = this;
        const element = get('.thought-visual-template').cloneNode();
        element.id = parent.id;
        element.className = `thought ${isRootThought && 'thought-root'}`;
        element.thoughtRef = parent;
        element.innerHTML = defaultText;
        element.getThought = function() {
            return parent;
        }
        get('#mindmap').appendChild(element);

        if (!element.hasOwnProperty('remove')) {
            Object.defineProperty(element, 'remove', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: function remove() {
                    this.parentNode.removeChild(this);
                }
            })
        }

        function edit() {
            if (parent.isEdited()) parent.edit();
        }

        element.on('dblclick', edit);

        return element;
    }

    getElement() {
        return this.element;
    }

    getValue() {
        const textarea = get('textarea', this.element);

        if (textarea) {
            return textarea.value;
        }

        return this.element.innerHTML;
    }

    getStyle() {
        return window.getComputedStyle(this.element);
    }

    getOuterWidth() {
        const {
            width,
            paddingLeft,
            paddingRight,
            marginLeft,
            marginRight,
            borderLeftWidth,
            borderRightWidth
        } = window.getComputedStyle(this.element);

        return parseInt(width)
            + parseInt(paddingLeft)
            + parseInt(paddingRight)
            + parseInt(marginLeft)
            + parseInt(marginRight)
            + parseInt(borderLeftWidth)
            + parseInt(borderRightWidth);
    }

    getOuterHeight() {
        const {
            height,
            paddingTop,
            paddingBottom,
            marginTop,
            marginBottom,
            borderTopWidth,
            borderBottomWidth
        } = window.getComputedStyle(this.element);

        return parseInt(height)
            + parseInt(paddingTop)
            + parseInt(paddingBottom)
            + parseInt(marginTop)
            + parseInt(marginBottom)
            + parseInt(borderTopWidth)
            + parseInt(borderBottomWidth);
    }

    getWidth() {
        const { width } = window.getComputedStyle(this.element);

        return parseInt(width);
    }

    getHeight() {
        const { height } = window.getComputedStyle(this.element);

        return parseInt(height);
    }

    getSize(isReturningHalf = false) {
        const width = this.getWidth();
        const height = this.getHeight();

        return {
            width: isReturningHalf ? width * 0.5 : width,
            height: isReturningHalf ? height * 0.5 : height,
        }
    }

    getOuterSize(isReturningHalf = false) {
        const width = this.getOuterWidth();
        const height = this.getOuterHeight();

        return {
            width: isReturningHalf ? width * 0.5 : width,
            height: isReturningHalf ? height * 0.5 : height,
        }
    }

    setHeight(height, withScale = true) {
        this.element.style.height = `${withScale ? height * store.scale : height}px`;

        return this;
    }

    getPosition() {
        const { left, top } = this.element.style;

        return new Vector(
            parseInt(left, 10) * store.scale,
            parseInt(top, 10) * store.scale,
        )
    }

    setPosition(x, y) {
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;

        return this;
    }

    setOnTop() {
        this.element.style.zIndex = '3';

        return this;
    }

    resetZIndex() {
        this.element.style.zIndex = '2';

        return this;
    }
}