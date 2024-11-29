import { TerraformConfig, TerraformResource } from "tfs";
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsDatazoneProjectArgs {
  description?: string;
  domain_identifier: string;
  glossary_terms?: string[];
  name: string;
  skip_deletion_check?: boolean;
  timeouts: Timeouts;
}
export class aws_datazone_project extends TerraformResource {
  readonly created_at!: string;
  readonly created_by!: string;
  readonly failure_reasons!: any[];
  readonly id!: string;
  readonly last_updated_at!: string;
  readonly project_status!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsDatazoneProjectArgs) {
    super(config, "resource", args, resourceName, "aws_datazone_project");
  }
}