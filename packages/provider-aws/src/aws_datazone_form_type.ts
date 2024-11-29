import { TerraformConfig, TerraformResource } from "tfs";
export interface Model {
  smithy: string;
}
export interface Timeouts {
  create?: string;
}
export interface AwsDatazoneFormTypeArgs {
  description?: string;
  domain_identifier: string;
  name: string;
  owning_project_identifier: string;
  model: Model;
  timeouts: Timeouts;
}
export class aws_datazone_form_type extends TerraformResource {
  readonly created_at!: string;
  readonly created_by!: string;
  readonly imports!: any[];
  readonly origin_domain_id!: string;
  readonly origin_project_id!: string;
  readonly revision!: string;
  readonly status?: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatazoneFormTypeArgs) {
    super(config, "resource", args, resourceName, "aws_datazone_form_type");
  }
}