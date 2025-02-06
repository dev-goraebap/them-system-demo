import { css, html, LitElement } from "lit";

class ThemePicker extends LitElement {

    static styles = css`
    #title {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 1rem;
    }
    #buttonContainer {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }
    button {
        cursor: pointer;
        border: none;
        background: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    button div:first-child {
        width: 2rem;
        height: 2rem;
        border-radius: 4px;
        border: 2px solid var(--color-gray-100);
    }
    button div:nth-child(2) {
        margin-top: 0.5rem;
        font-size: 0.75rem;
        font-weight: bold;
        color: var(--color-base-content);
    }
    #lightBtn div:first-child {
        background-color: white;
    }
    #darkBtn div:first-child {
        background-color: var(--color-gray-800);
    }
    #custom01Btn div:first-child {
        background: linear-gradient(to top right, var(--color-red-100), var(--color-green-100));
    }
    #custom02Btn div:first-child {
        background: linear-gradient(to top right, var(--color-red-100), var(--color-red-200));
    }
    #custom03Btn div:first-child {
        background: linear-gradient(to top right, #dbeafe, #93c5fd, #3b82f6);
    }
    `;

    firstUpdated() {
        const buttons = this.shadowRoot.querySelectorAll('[id="buttonContainer"] button');
        buttons.forEach(b => {
            console.log(b.dataset.id);
            b.addEventListener('click', () => {
                console.log('click', b.dataset.id);
                document.body.setAttribute('data-theme', b.dataset.id);
            });
        });
    }

    render() {
        return html`
        <div part="container">
            <h1 id="title">Theme Picker</h1>
            <div id="buttonContainer">
                <button id="lightBtn" data-id="light">
                    <div></div>
                    <div>맑음</div>
                </button>
                <button id="darkBtn" data-id="dark">
                    <div></div>
                    <div>어두움</div>
                </button>
                <button id="custom01Btn" data-id="hanami">
                    <div></div>
                    <div>하나미</div>
                </button>
                <button id="custom02Btn" data-id="candyfluff">
                    <div></div>
                    <div>솜사탕</div>
                </button>
                <button id="custom03Btn" data-id="snowstorm">
                    <div></div>
                    <div>눈보라</div>
                </button>
            </div>
        </div>
        `;
    }
}

export default customElements.define('ui-theme-picker', ThemePicker);