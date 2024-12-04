import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatazoneGlossaryArgs {
  description?: string;
  domain_identifier: string;
  name: string;
  owning_project_identifier: string;
  status?: string;
}

export class aws_datazone_glossary extends TerraformResource {
  readonly id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDatazoneGlossaryArgs) {
    super(config, "resource", args, resourceName, "aws_datazone_glossary");
  }
}
