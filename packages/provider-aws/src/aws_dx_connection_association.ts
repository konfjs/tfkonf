import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsDxConnectionAssociationArgs {
  connection_id: string;
  lag_id: string;
}
export class aws_dx_connection_association extends TerraformResource {
  readonly id?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDxConnectionAssociationArgs) {
    super(config, "resource", args, resourceName, "aws_dx_connection_association");
  }
}