import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface AwsDatazoneGlossaryTermArgsTermRelations {
  classifies?: string[];
  is_a?: string[];
}

export interface AwsDatazoneGlossaryTermArgsTimeouts {
  create?: string;
}

export interface AwsDatazoneGlossaryTermArgs {
  domain_identifier?: string;
  glossary_identifier: string;
  long_description?: string;
  name: string;
  short_description?: string;
  status?: string;
  term_relations: AwsDatazoneGlossaryTermArgsTermRelations;
  timeouts?: AwsDatazoneGlossaryTermArgsTimeouts;
}

export class aws_datazone_glossary_term extends TerraformResource {
  readonly created_at!: string;
  readonly created_by!: string;
  readonly id!: string;

  constructor(config: TerraformConfig, resourceName: string, args: AwsDatazoneGlossaryTermArgs) {
    super(config, "resource", args, resourceName, "aws_datazone_glossary_term");
  }
}
