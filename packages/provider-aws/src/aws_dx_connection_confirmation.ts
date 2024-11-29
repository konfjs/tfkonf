import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsDxConnectionConfirmationArgs {
  connection_id: string;
}
export class aws_dx_connection_confirmation extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxConnectionConfirmationArgs) {
    super(config, "resource", args, resourceName, "aws_dx_connection_confirmation");
  }
}