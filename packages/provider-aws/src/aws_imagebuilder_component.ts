import { TerraformConfig, TerraformResource } from "@konfjs/core";
export interface AwsImagebuilderComponentArgs {
  change_description?: string;
  description?: string;
  kms_key_id?: string;
  name: string;
  platform: string;
  skip_destroy?: boolean;
  supported_os_versions?: string[];
  tags?: {
    [key: string]: string;
  };
  uri?: string;
  version: string;
}
export class aws_imagebuilder_component extends TerraformResource {
  readonly arn!: string;
  readonly data?: string;
  readonly date_created!: string;
  readonly encrypted!: boolean;
  readonly id?: string;
  readonly owner!: string;
  readonly tags_all?: {
    [key: string]: string;
  };
  readonly type!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsImagebuilderComponentArgs) {
    super(config, "resource", args, resourceName, "aws_imagebuilder_component");
  }
}