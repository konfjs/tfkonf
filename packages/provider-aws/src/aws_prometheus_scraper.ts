import { TerraformConfig, TerraformResource } from "tfs";
export interface Amp {
  workspace_arn: string;
}
export interface Destination {
  amp: Amp;
}
export interface Eks {
  cluster_arn: string;
  subnet_ids: string[];
}
export interface Source {
  eks: Eks;
}
export interface Timeouts {
  create?: string;
  delete?: string;
}
export interface AwsPrometheusScraperArgs {
  alias?: string;
  scrape_configuration: string;
  tags?: {
    [key: string]: string;
  };
  destination: Destination;
  source: Source;
  timeouts: Timeouts;
}
export class aws_prometheus_scraper extends TerraformResource {
  readonly arn!: string;
  readonly id!: string;
  readonly role_arn!: string;
  readonly tags_all!: {
    [key: string]: string;
  };
  constructor(config: TerraformConfig, resourceName: string, args: AwsPrometheusScraperArgs) {
    super(config, "resource", args, resourceName, "aws_prometheus_scraper");
  }
}