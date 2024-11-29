import { TerraformConfig, TerraformResource } from "tfs";
export interface AwsPrometheusScraperArgsdestinationamp {
  workspace_arn: string;
}
export interface AwsPrometheusScraperArgsdestination {
  amp: AwsPrometheusScraperArgsdestinationamp;
}
export interface AwsPrometheusScraperArgssourceeks {
  cluster_arn: string;
  subnet_ids: string[];
}
export interface AwsPrometheusScraperArgssource {
  eks: AwsPrometheusScraperArgssourceeks;
}
export interface AwsPrometheusScraperArgstimeouts {
  create?: string;
  delete?: string;
}
export interface AwsPrometheusScraperArgs {
  alias?: string;
  scrape_configuration: string;
  tags?: {
    [key: string]: string;
  };
  destination: AwsPrometheusScraperArgsdestination;
  source: AwsPrometheusScraperArgssource;
  timeouts: AwsPrometheusScraperArgstimeouts;
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