import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsSsmcontactsContactArgs {
  alias: string;
  display_name?: string;
  tags?: {
    [key: string]: string;
  };
  type: string;
}
export class aws_ssmcontacts_contact extends TerraformResource {
  readonly arn!: string;
  readonly id?: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsSsmcontactsContactArgs) {
    super(config, "resource", args, resourceName, "aws_ssmcontacts_contact");
  }
}