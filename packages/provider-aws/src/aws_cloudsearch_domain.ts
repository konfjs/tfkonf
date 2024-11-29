import { TerraformConfig, TerraformResource } from "tfs";
export interface EndpointOptions {}
export interface IndexField {
  analysis_scheme?: string;
  default_value?: string;
  facet?: boolean;
  highlight?: boolean;
  name: string;
  return?: boolean;
  search?: boolean;
  sort?: boolean;
  source_fields?: string;
  type: string;
}
export interface ScalingParameters {}
export interface Timeouts {
  create?: string;
  delete?: string;
  update?: string;
}
export interface AwsCloudsearchDomainArgs {
  name: string;
  endpoint_options: EndpointOptions;
  index_field: IndexField;
  scaling_parameters: ScalingParameters;
  timeouts: Timeouts;
}
export class aws_cloudsearch_domain extends TerraformResource {
  readonly arn!: string;
  readonly document_service_endpoint!: string;
  readonly domain_id!: string;
  readonly id?: string;
  readonly multi_az?: boolean;
  readonly search_service_endpoint!: string;
  constructor(config: TerraformConfig, resourceName: string, args: AwsCloudsearchDomainArgs) {
    super(config, "resource", args, resourceName, "aws_cloudsearch_domain");
  }
}