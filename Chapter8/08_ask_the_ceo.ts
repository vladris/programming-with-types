namespace AskTheCEO {

class CEO {
    isBusy(): boolean {
        /* ... */
        return false;
    }

    answer(question: string): string {
        /* ... */
        return "";
    }
}

class Department {
    /* ... */
}

class Budget {
    /* ... */
}

class Company {
    private ceo: CEO = new CEO();
    private departments: Department[] = [];
    private budget: Budget = new Budget();

    askCEO(question: string): string | undefined {
        if (!this.ceo.isBusy()) {
            return this.ceo.answer(question);
        }
    }
}

}