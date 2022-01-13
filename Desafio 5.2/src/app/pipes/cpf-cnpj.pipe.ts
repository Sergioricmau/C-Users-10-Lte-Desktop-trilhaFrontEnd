import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'cpfCnpj'})
export class CpfCnpjPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {

    }
    const CpfCnpjPipe = value.replace(/[^0-9]/g, '');

    if (CpfCnpjPipe.length === 11) {
      return CpfCnpjPipe.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "\$1.\$2.\$3\-\$4");
    } else if (CpfCnpjPipe.length === 14) {
      return CpfCnpjPipe.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, "\$1.\$2.\$3\/\$4\-\$5");
    }

    return value;
  }

}
