import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  delete?: string;
}
export interface AwsRoute53recoveryreadinessCellArgs {
  cell_name: string;
  cells?: string[];
  tags?: {
    [key: string]: string;
  };
  timeouts: Timeouts;
}
export class aws_route53recoveryreadiness_cell extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly parent_readiness_scopes!: string[];
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsRoute53recoveryreadinessCellArgs) {
    super(config, "resource", args, resourceName, "aws_route53recoveryreadiness_cell");
  }
}