import * as nest from "@nestjs/common";

@nest.Controller("monitors/health")
export class HealthController {
  @nest.Get()
  public get(): String {
    return "aaa"
  }
}
