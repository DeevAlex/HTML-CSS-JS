export default class ValidaCPF {

    constructor(cpfEnviado) {

        Object.defineProperty(this, "cpfLimpo", {

            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, "")

        })

    }

    éSequência () { // e pode usar acentos em caso de class

        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;

    }

    geraNovoCPF() {

        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);

        this.novoCPF = cpfSemDigitos + digito1 + digito2;

    }

    static geraDigito(cpfSemDigitos) {

        let total = 0;
        let regressivo = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos) {
            total += regressivo * Number(stringNumerica);
            regressivo--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : "0";

    }

    valida() {

        if (!this.cpfLimpo) return false
        if (typeof this.cpfLimpo !== "string") return false
        if (this.cpfLimpo.length !== 11) return false;
        if (this.éSequência()) return false;
        this.geraNovoCPF();

        return this.novoCPF === this.cpfLimpo;
        
    }

}

