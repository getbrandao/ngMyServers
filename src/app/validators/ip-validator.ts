import { FormControl } from "@angular/forms";

export class IpValidator {
  private static IP_REGEX = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

  static validate(control: FormControl): {[key: string]: boolean} {
    return IpValidator.IP_REGEX.test(control.value) ? null : {'ip':true};
  }
}
